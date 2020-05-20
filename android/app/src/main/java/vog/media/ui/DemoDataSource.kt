package vog.media.ui

import androidx.paging.PageKeyedDataSource
import vog.media.persistence.Demo
import vog.media.ui.cheese.CheeseActivity
import vog.media.ui.image.ImageActivity
import vog.media.ui.user.UserActivity

/**
 * Yalin on 2020/5/19
 */
class DemoDataSource : PageKeyedDataSource<Int, Demo>() {
    override fun loadInitial(
        params: LoadInitialParams<Int>,
        callback: LoadInitialCallback<Int, Demo>
    ) {
        callback.onResult(
            arrayListOf(
                UserActivity::class.java,
                CheeseActivity::class.java,
                ImageActivity::class.java
            ).map { Demo(it.name, it) },
            0,
            -1
        )
    }

    override fun loadAfter(params: LoadParams<Int>, callback: LoadCallback<Int, Demo>) {
        callback.onError(Exception("No More"))
    }

    override fun loadBefore(params: LoadParams<Int>, callback: LoadCallback<Int, Demo>) {
    }
}
