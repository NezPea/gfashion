package vog.media.ui.network

import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import timber.log.Timber
import vog.media.R
import vog.media.api.ApiSuccessResponse
import vog.media.di.Injectable
import javax.inject.Inject

/**
 * Allen on 2020/5/20
 */
class NetworkActivity : AppCompatActivity(), Injectable {
    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val viewModel: NetworkViewModel by viewModels { viewModelFactory }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_network)

        viewModel.load().observe(this, Observer {
            if (it is ApiSuccessResponse) {
                Timber.d(it.body.toString())
            } else {
                Timber.e("fetch failed. ")
            }
        })
    }
}