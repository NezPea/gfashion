package vog.media.binding

import android.app.Activity
import androidx.databinding.DataBindingComponent

/**
 * Allen on 2020/5/20
 */
class GDataBindingComponent(activity: Activity) : DataBindingComponent {
    private val adapter = ActivityBindingAdapters(activity)

    override fun getActivityBindingAdapters() = adapter
}
