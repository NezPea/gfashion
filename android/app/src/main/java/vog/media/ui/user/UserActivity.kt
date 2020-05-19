package vog.media.ui.user

import android.os.Bundle
import android.util.Log
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.schedulers.Schedulers
import kotlinx.android.synthetic.main.activity_user.*
import vog.media.Injection
import vog.media.R

/**
 * Yalin on 2020/5/19
 */
class UserActivity : AppCompatActivity() {
    private lateinit var viewModelFactory: ViewModelFactory
    private val viewModel: UserViewModel by viewModels { viewModelFactory }
    private val disposable = CompositeDisposable()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_user)

        viewModelFactory = Injection.provideViewModelFactory(this)
        update_user_button.setOnClickListener { updateUserName() }
    }

    override fun onStart() {
        super.onStart()
        disposable.add(
            viewModel.userName()
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe({ this.user_name.text = it },
                    { error -> Log.e(TAG, "Unable to get username", error) })
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
                    { error -> Log.e(TAG, "Unable to update username", error) })
        )
    }

    companion object {
        private val TAG = UserActivity::class.java.simpleName
    }
}