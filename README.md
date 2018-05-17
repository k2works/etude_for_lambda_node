
# EtudeForLambdaNode
  
---
# 目的
  
AWS Lambdaアプリケーション構築サンプル
  
# 前提
  
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |8.10.0    |             |
| npm            |5.6.0  |             |
| sam            |0.2.11  |             |
| docker         |17.06.2  |             |
| docker-compose |1.21.0  |             |
| vagrant        |2.0.3  |             |
  
  
# 構成
  
1. [構築](#構築 )
1. [配置](#配置 )
1. [運用](#運用 )
1. [開発](#開発 )
  
## 構築
### 開発用仮想マシンのプロビジョニング
```
vagrant up
vagrant provision
vagarnt ssh
cd /vagrant
```

## 配置
`.env`環境変数ファイルを作成する。

`.env`ファイルはGit管理対象外とする。
```
AWS_ACCESS_KEY_ID=xxxxxxxxxxxxxxx
AWS_SECRET_ACCESS_KEY=xxxxxxxxxxxxxxxxxxxxxx
AWS_DEFAULT_REGION=ap-northeast-1
```

AWSCLIツールを使えるようにする
```
aws configure 
AWS Access Key ID [None]: xxxxxxxxxxxxxxx
AWS Secret Access Key [None]: xxxxxxxxxxxxxxxxxxxxxx
Default region name [None]: ap-northeast-1
Default output format [None]: json
```

デプロイ用S3バケットを作成する
```
aws s3 mb s3://etude-for-lambda-node
```

アプリケーションをデプロイする
```
./dev.sh deploy
```

Lambda 関数を使用してサンプルの関数ペイロードを実行する。
```bash
./dev.sh invoke helloWorld event.json
```

## 運用
アプリケーションの更新
```bash
./dev.sh upload helloWorld
```

アプリケーションの削除
```bash
./dev.sh delete
```

### Dockerコンテナを使った配置と運用
dockerコマンド
```
docker build . -t app
docker run --rm -it -v `pwd`:/app:cached  --env-file .env app bash
```
docker-composeコマンド
```
docker-compose up
docker-compose exec app bash
```

## 開発
### 開発環境セットアップ
nvmをインストールする
```
cd /vagrant
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
source ~/.bash_profile 
```

nodeをインストールする
```
nvm install 8.10.0
nvm use v8.10.0
```

### npmパッケージのインストール
```
npm install
npm install -g aws-sam-local
npm install --save-dev husky
```

### サンプルアプリケーションのテスト
```
npm run test
```

### サンプルアプリケーションのビルド
```
npm run build
```

### Lambda 関数を使用してサンプルの関数ペイロードをローカルでテストする。
```
sam local invoke HelloWorldFunction -t infrastructure/sam.yaml -e event.json 
```

### Expressのセットアップ
```
npm install express compression
npm install --save-dev nodemon
npm install --save-dev pm2
npm install --save-dev rimraf
npm install --save-dev cross-env
```

### Reactのセットアップ
webpack & React
```
npm install --save-dev webpack-dev-server
npm install --save-dev react react-dom
npm install --save-dev babel-preset-react
```

Hot Module Replacement
```
npm install --save-dev react-hot-loader@next
```

# 参照
+ [sam-scaffold](https://github.com/Giftbit/sam-scaffold)
+ [SAM Local (Beta)](https://github.com/awslabs/aws-sam-local)
+ [AWS EC2 Amazon LinuxでDocker, Docker Composeをインストールする](https://qiita.com/shinespark/items/a8019b7ca99e4a30d286)
+ [JavaScript Stack from Scratch](https://github.com/verekia/js-stack-from-scratch/)
+ [AWS Serverless Express](https://github.com/awslabs/aws-serverless-express)


npm run config -- \
--account-id="411087959999" \
--bucket-name="etude-for-lambda-node-aws-serverless-express" \
