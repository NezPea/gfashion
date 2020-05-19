package vog.media.ui

import androidx.paging.DataSource
import vog.media.persistence.Demo

/**
 * Yalin on 2020/5/19
 */
class DemoDataSourceFactory : DataSource.Factory<Int, Demo>() {
    override fun create(): DataSource<Int, Demo> = DemoDataSource()
}
