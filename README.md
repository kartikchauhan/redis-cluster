To create the cluster, run:
```
redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 \
127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \
--cluster-replicas 1
```

Get Cluster's nodes info
```
127.0.0.1:7000> CLUSTER NODES
bc8b37dfe42454499e484c8c9b1cb4633fed71e5 127.0.0.1:7004@17004 slave 3fbb8962f3caec95e44bd716d0f5918decd01b3d 0 1673109487807 3 connected
6e88b8f9ceb1de5511e1ae78376a39caccc3626b 127.0.0.1:7003@17003 slave 95fab731632ffd2b5768cc3288916245d9af6492 0 1673109487603 2 connected
61ef31a0659ff330c4c4d539cc9f63a92678f039 127.0.0.1:7000@17000 myself,master - 0 1673109488000 1 connected 0-5460
2df5c86b60a3773b197504de96053794a7ff8073 127.0.0.1:7005@17005 slave 61ef31a0659ff330c4c4d539cc9f63a92678f039 0 1673109487000 1 connected
3fbb8962f3caec95e44bd716d0f5918decd01b3d 127.0.0.1:7002@17002 master - 0 1673109488529 3 connected 10923-16383
95fab731632ffd2b5768cc3288916245d9af6492 127.0.0.1:7001@17001 master - 0 1673109488000 2 connected 5461-10922
```

Check which hash slot a key resides in
```
127.0.0.1:7000> CLUSTER KEYSLOT baz
(integer) 4813
```