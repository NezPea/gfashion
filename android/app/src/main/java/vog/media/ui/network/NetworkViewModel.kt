package vog.media.ui.network

import androidx.lifecycle.ViewModel
import vog.media.repository.NetworkRepository
import javax.inject.Inject

/**
 * Allen on 2020/5/20
 */
class NetworkViewModel @Inject constructor(val repository: NetworkRepository) : ViewModel() {
    fun load() = repository.loadData()
}