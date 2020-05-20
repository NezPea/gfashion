package vog.media.ui.user

import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.ViewModelProvider
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.schedulers.Schedulers
import kotlinx.android.synthetic.main.activity_user.*
import timber.log.Timber
import vog.media.R
import vog.media.di.Injectable
import javax.inject.Inject

/**
 * Allen on 2020/5/19
 */
class UserActivity : AppCompatActivity(), Injectable {
    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val viewModel: UserViewModel by viewModels { viewModelFactory }
    private val disposable = CompositeDisposable()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user)

        update_user_button.setOnClickListener { updateUserName() }
    }

    override fun onStart() {
        super.onStart()
        disposable.add(
            viewModel.userName()
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe({ this.user_name.text = it },
                    { error -> Timber.e(error, "Unable to get username") })
        )
    }

    override fun onStop() {
        super.onStop()

        disposable.clear()
    }

    private fun updateUserName() {
        val userName = user_name_input.text.toString()
        update_user_button.isEnabled = false
        disposable.add(
            viewModel.updateUserName(userName)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe({ update_user_button.isEnabled = true },
                    { error -> Timber.e(error, "Unable to update username") })
        )
    }

    companion object {
        private val TAG = UserActivity::class.java.simpleName
    }
}