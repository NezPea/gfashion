package vog.media

import android.content.Context
import vog.media.persistence.UserDao
import vog.media.persistence.GfashionDatabase
import vog.media.ui.user.ViewModelFactory

/**
 * Yalin on 2020/5/19
 */
object Injection {

    fun provideUserDataSource(context: Context): UserDao {
        val database = GfashionDatabase.getInstance(context)
        return database.userDao()
    }

    fun provideViewModelFactory(context: Context): ViewModelFactory {
        val dataSource = provideUserDataSource(context)
        return ViewModelFactory(dataSource)
    }
}