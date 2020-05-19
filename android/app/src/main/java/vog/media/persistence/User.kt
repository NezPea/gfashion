package vog.media.persistence

import androidx.room.ColumnInfo
import androidx.room.Entity
import androidx.room.PrimaryKey
import java.util.*

/**
 * Yalin on 2020/5/19
 */

@Entity(tableName = "users")
data class User(
    @PrimaryKey
    @ColumnInfo(name = "userid")
    val id: String = UUID.randomUUID().toString(),
    @ColumnInfo(name = "username")
    val userName: String
)