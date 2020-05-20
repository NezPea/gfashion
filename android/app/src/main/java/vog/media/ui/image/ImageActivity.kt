package vog.media.ui.image

import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.databinding.DataBindingComponent
import androidx.databinding.DataBindingUtil
import androidx.lifecycle.Observer
import androidx.lifecycle.ViewModelProvider
import vog.media.R
import vog.media.binding.GDataBindingComponent
import vog.media.databinding.ActivityImageBinding
import vog.media.di.Injectable
import javax.inject.Inject

/**
 * Yalin on 2020/5/20
 */

class ImageActivity : AppCompatActivity(), Injectable {
    @Inject
    lateinit var viewModelFactory: ViewModelProvider.Factory

    private val viewModel: ImageViewModel by viewModels { viewModelFactory }

    var dataBindingComponent: DataBindingComponent = GDataBindingComponent(this)

    private lateinit var binding: ActivityImageBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding =
            DataBindingUtil.setContentView(this, R.layout.activity_image, dataBindingComponent)

        viewModel.image().observe(this, Observer { binding.url = it })
    }

    override fun onDestroy() {
        super.onDestroy()
        binding.unbind()
    }
}
