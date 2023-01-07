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

Print cluster manual
```
127.0.0.1:7000> CLUSTER HELP
 1) CLUSTER <subcommand> [<arg> [value] [opt] ...]. Subcommands are:
 2) ADDSLOTS <slot> [<slot> ...]
 3)     Assign slots to current node.
 4) ADDSLOTSRANGE <start slot> <end slot> [<start slot> <end slot> ...]
 5)     Assign slots which are between <start-slot> and <end-slot> to current node.
 6) BUMPEPOCH
 7)     Advance the cluster config epoch.
 8) COUNT-FAILURE-REPORTS <node-id>
 9)     Return number of failure reports for <node-id>.
10) COUNTKEYSINSLOT <slot>
11)     Return the number of keys in <slot>.
12) DELSLOTS <slot> [<slot> ...]
13)     Delete slots information from current node.
14) DELSLOTSRANGE <start slot> <end slot> [<start slot> <end slot> ...]
15)     Delete slots information which are between <start-slot> and <end-slot> from current node.
16) FAILOVER [FORCE|TAKEOVER]
17)     Promote current replica node to being a master.
18) FORGET <node-id>
19)     Remove a node from the cluster.
20) GETKEYSINSLOT <slot> <count>
21)     Return key names stored by current node in a slot.
22) FLUSHSLOTS
23)     Delete current node own slots information.
24) INFO
25)     Return information about the cluster.
26) KEYSLOT <key>
27)     Return the hash slot for <key>.
28) MEET <ip> <port> [<bus-port>]
29)     Connect nodes into a working cluster.
30) MYID
31)     Return the node id.
32) NODES
33)     Return cluster configuration seen by node. Output format:
34)     <id> <ip:port> <flags> <master> <pings> <pongs> <epoch> <link> <slot> ...
35) REPLICATE <node-id>
36)     Configure current node as replica to <node-id>.
37) RESET [HARD|SOFT]
38)     Reset current node (default: soft).
39) SET-CONFIG-EPOCH <epoch>
40)     Set config epoch of current node.
41) SETSLOT <slot> (IMPORTING <node-id>|MIGRATING <node-id>|STABLE|NODE <node-id>)
42)     Set slot state.
43) REPLICAS <node-id>
44)     Return <node-id> replicas.
45) SAVECONFIG
46)     Force saving cluster configuration on disk.
47) SLOTS
48)     Return information about slots range mappings. Each range is made of:
49)     start, end, master and replicas IP addresses, ports and ids
50) SHARDS
51)     Return information about slot range mappings and the nodes associated with them.
52) LINKS
53)     Return information about all network links between this node and its peers.
54)     Output format is an array where each array element is a map containing attributes of a link
55) HELP
56)     Prints this help.
```