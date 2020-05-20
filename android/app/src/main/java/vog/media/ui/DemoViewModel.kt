package vog.media.ui

import androidx.lifecycle.ViewModel
import androidx.paging.toLiveData

/**
 * Allen on 2020/5/19
 */
class DemoViewModel : ViewModel() {
    fun allDemo() = DemoDataSourceFactory().toLiveData(20)
}