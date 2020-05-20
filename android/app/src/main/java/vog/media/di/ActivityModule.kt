package vog.media.di

import dagger.Module
import dagger.android.ContributesAndroidInjector
import vog.media.ui.cheese.CheeseActivity
import vog.media.ui.image.ImageActivity
import vog.media.ui.user.UserActivity

/**
 * Yalin on 2020/5/20
 */

@Suppress("unused")
@Module
abstract class ActivityModule {
    @ContributesAndroidInjector
    abstract fun contributeUserActivity(): UserActivity

    @ContributesAndroidInjector
    abstract fun contributeCheeseActivity(): CheeseActivity

    @ContributesAndroidInjector
    abstract fun contributeImageActivity(): ImageActivity
}