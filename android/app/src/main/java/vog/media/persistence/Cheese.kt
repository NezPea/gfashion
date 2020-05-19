package vog.media.persistence

import androidx.room.Entity
import androidx.room.PrimaryKey

/**
 * Yalin on 2020/5/19
 */
@Entity
data class Cheese(@PrimaryKey(autoGenerate = true) val id: Int, val name: String)