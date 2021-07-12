# sequelize



## 文档



## 遇到的问题

[sequelize引起mysql错误：Too many keys specified. Max 64 keys allowed](https://www.chaoswork.cn/1064.html)

```
SELECT CONCAT('ALTER TABLE ',i.TABLE_NAME,' DROP INDEX ',i.INDEX_NAME,' ;') 
FROM INFORMATION_SCHEMA.STATISTICS i WHERE TABLE_SCHEMA = 'bianjizutai' AND i.INDEX_NAME <> 'PRIMARY';
```