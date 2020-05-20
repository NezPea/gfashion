package vog.media.ui

import androidx.appcompat.app.AppCompatActivity

/**
 * Yalin on 2020/5/20
 */
interface DemoClickCallback {
    fun onClick(clazz: Class<out AppCompatActivity>)
}