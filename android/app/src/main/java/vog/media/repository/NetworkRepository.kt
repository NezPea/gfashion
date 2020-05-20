package vog.media.repository

import androidx.lifecycle.LiveData
import vog.media.AppExecutors
import vog.media.api.ApiResponse
import vog.media.api.GService
import vog.media.api.RepoSearchResponse
import javax.inject.Inject
import javax.inject.Singleton

/**
 * Yalin on 2020/5/20
 */
@Singleton
class NetworkRepository @Inject constructor(
    private val appExecutors: AppExecutors,
    private val gService: GService
) {
    fun loadData(): LiveData<ApiResponse<RepoSearchResponse>> {
        return gService.searchRepos("android")
    }

}