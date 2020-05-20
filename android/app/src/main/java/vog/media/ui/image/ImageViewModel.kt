package vog.media.ui.image

import androidx.lifecycle.LiveData
import androidx.lifecycle.ViewModel
import javax.inject.Inject

/**
 * Yalin on 2020/5/20
 */
class ImageViewModel @Inject constructor() : ViewModel() {
    fun image(): LiveData<String> {
        return object :
            LiveData<String>() {
            override fun onActive() {
                super.onActive()
                postValue("https://lokeshdhakar.com/projects/lightbox2/images/image-3.jpg")
            }
        }
    }
}