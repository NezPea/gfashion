package vog.media.ui.user

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import vog.media.persistence.UserDao

/**
 * Yalin on 2020/5/19
 */

class ViewModelFactory(private val dataSource: UserDao) : ViewModelProvider.Factory {

    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(UserViewModel::class.java)) {
            return UserViewModel(dataSource) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class")
    }
}