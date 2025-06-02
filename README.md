# openapi-generator-practice

OpenAPI Generator の検証

REST API のアプリケーションで React で OpenAPI からの API クライアントと型生成で openapi-typescript, openapi-fetch を使用していたが、手動で作成する範囲が広くて悩ましいと思っていたため、OpenAPI Generator を試してみる

Tanstack Query とかを使用するのであれば、Orval が良さそうだが、Server Components, Server Actions でも使用することを加味し、Hook ベースではない API クライアントを作ることを想定し、OpenAPI Generator で検証

## 参考

- https://gift-tech.co.jp/articles/openapi-generator-typescript/
- https://qiita.com/logy0704/items/3abbf16c91b34609fa3a
- https://tech.smarthr.jp/entry/2020/08/25/135631
