[Designing G-Fashion](https://4idps-demo6.com/)

# 1. What is G-Fashion?

- A online fashion hub to aggregate top brands from all over the world
- G-Club registration
- 'Fashion Feeds' to provide a variety of views for users
- TBC

# 2. Requirements and Goals of the System

## Functional Requirements:

功能模块的划分（新添加供应链模块）：

1.  用户管理，地址管理，账户管理等
2.  商品目录，商品展示，商品详情等（含 GFashion 和 Gmall）
3.  G-club，折扣，储值
4.  支付，
5.  供应链模块(比较轻的供应链)，涉及:履约(订单履约过程跟踪，退款，退货，订购，物流，仓储)
6.  辅助功能（投诉，货运，免责等）
7.  商家后台（含 GFashion 和 Gmall）
8.  资质审核模块

**Out of Scope** This document focus on G-Fashion only, G-Club and G-Mall is out of scope

## Non-Functional Requirements:

- The system should be highly available.
- low latency for upload/download but should be real-time for live stream. 200ms for GTV Feeds generation
- Consistency - eventual consistent is acceptable across various devices
- highly reliable, no lost photos or videos or live stream connection
- scalability, automatic for live stream
- security, end-to-end encrytion
- usability, UX criteria TBD

## Some Design Considerations

# 3. Capacity Estimation and Constraints

- Let's assume we have 1B total consumer, with 500M daily active users globally
- But only 100M purchase occurred daily
- How many branded shop online?

## Traffic estimates:

**What would be Transaction Per Second (TPS) for our system?** 100M / 24 / 3600 = 1158 TPS

## Storage estimates:

## Bandwidth estimates:

## Memory estimates:

# 4. System APIs

See Swagger API spec, coming soon...

## Parameters:

- api_dev_key (string): The API developer key of a registered account. This will be used to, among other things, throttle users based on their allocated quota.

## Returns:(string)

**How do we detect and prevent abuse?**

# 5. High Level System Design

At a high-level, we need to support two scenarios, one to upload videos and the other to view/download/search videos. Our service would need some object storage servers to store videos and also some database servers to store metadata information about the videos.

# 6. Database Design

## Database Schema:

```
Table Product
ProductID: int, PK
Description: varchar(256)
CreatedBy: varchar(256)
CreatedAt: datetime

Table User
UserID: int, PK
Name: varchar(20)
Email: varchar(32)
DateOfBirth: datetime
CreationDate: datetime
LastLogin: datetime

...
```

## What kind of database should we use?


# 7. Data Size Estimation

# 8. Component Design

# 9. Reliability and Redundancy

# 10. Data Partitioning and Replication (Sharding)

## a. Range Based Partitioning

## b. Hash-Based Partitioning

## [Consistent Hashing](https://www.toptal.com/big-data/consistent-hashing)

# 11. Ranking and GTV Feeds Generation

# 12. GTV Feeds Creation with Sharded Data

# 13. Cache

Redis

**How much cache memory should we have?**
**Which cache eviction policy would best fit our needs?**
**How can each cache replica be updated?**

# 14. Load Balancer (LB)

# 15. Purging or DB cleanup

# 16. Telemetry

# 17. Security and Permissions

# Reference
