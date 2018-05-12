FROM amazonlinux
MAINTAINER k2works
LABEL version="1.0"

RUN set -xv                                                                                 && \
    yum install groff less vim -y

# http://www.bunkei-programmer.net/entry/2017/10/24/023746#sudo%E3%81%8C%E7%84%A1%E3%81%84%E3%82%93%E3%81%A7%E3%81%99%E3%81%91%E3%81%A9
RUN yum install shadow-utils.x86_64 sudo -y
RUN echo 'Defaults visiblepw'         >> /etc/sudoers
RUN echo 'app ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers
# Add the user UID:1000, GID:1000, home at /app
RUN groupadd -r app -g 1000 && useradd -u 1000 -r -g app -m -d /home/app -s /sbin/nologin -c "App user" app
RUN echo 'ZONE="Asia/Tokyo"' > /etc/sysconfig/clock && \
    rm -f /etc/localtime && \
    ln -fs /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    echo "LANG=\"en_US\"" > /etc/sysconfig/i18n
RUN mkdir /app && \
    chmod 755 /app

USER app
WORKDIR /home/app
ENV node_version="8.10.0"
RUN set -xv                                                                                 && \
    curl -s "https://bootstrap.pypa.io/get-pip.py" -o "get-pip.py"                          && \
    sudo python get-pip.py                                                                  && \
    sudo /usr/local/bin/pip install awscli --ignore-installed six                           && \
    curl -s -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | sh    && \
    source ~/.nvm/nvm.sh                                                                    && \
    nvm install $node_version                                                               && \
    npm install -g jsonlint                                                                 && \
    npm install -g jq

RUN set -xv                                                                                 && \
    complete -C '/usr/local/bin/aws_completer' aws                                          && \
    echo "complete -C '/usr/local/bin/aws_completer' aws" >> $HOME/.bashrc                  && \
echo "source ~/.nvm/nvm.sh" >> $HOME/.bashrc

WORKDIR /app
