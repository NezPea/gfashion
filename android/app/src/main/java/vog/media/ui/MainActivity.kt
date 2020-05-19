package vog.media.ui

import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import kotlinx.android.synthetic.main.activity_main.*
import vog.media.R

class MainActivity : AppCompatActivity() {

    private val viewModel by viewModels<DemoViewModel>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val adapter = DemoAdapter();
        demoList.adapter = adapter
        viewModel.allDemo().observe(this, Observer(adapter::submitList))
    }
}
