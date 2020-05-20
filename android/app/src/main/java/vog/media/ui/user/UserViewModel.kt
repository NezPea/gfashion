package vog.media.ui.user

import androidx.lifecycle.ViewModel
import io.reactivex.Completable
import io.reactivex.Flowable
import vog.media.persistence.User
import vog.media.persistence.UserDao
import javax.inject.Inject

/**
 * Allen on 2020/5/19
 */
class UserViewModel @Inject constructor(private val dataSource: UserDao) : ViewModel() {

    /**
     * Get the user name of the user.

     * @return a [Flowable] that will emit every time the user name has been updated.
     */
    // for every emission of the user, get the user name
    fun userName(): Flowable<String> {
        return dataSource.getUserById(USER_ID)
            .map { user -> user.userName }
    }

    /**
     * Update the user name.
     * @param userName the new user name
     * *
     * @return a [Completable] that completes when the user name is updated
     */
    fun updateUserName(userName: String): Completable {
        val user = User(USER_ID, userName)
        return dataSource.insertUser(user)
    }

    companion object {
        // using a hardcoded value for simplicity
        const val USER_ID = "1"
    }
}
