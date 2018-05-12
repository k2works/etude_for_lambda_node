
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
```

### Dockerコンテナのビルド
```
cd /vagrant
docker build . -t app
```

## 配置

## 運用

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


# 参照
+ [sam-scaffold](https://github.com/Giftbit/sam-scaffold)
+ [SAM Local (Beta)](https://github.com/awslabs/aws-sam-local)
+ [AWS EC2 Amazon LinuxでDocker, Docker Composeをインストールする](https://qiita.com/shinespark/items/a8019b7ca99e4a30d286)
