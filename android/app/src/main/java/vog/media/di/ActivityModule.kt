package vog.media.di

import dagger.Module
import dagger.android.ContributesAndroidInjector
import vog.media.ui.cheese.CheeseActivity
import vog.media.ui.image.ImageActivity
import vog.media.ui.network.NetworkActivity
import vog.media.ui.user.UserActivity

/**
 * Allen on 2020/5/20
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

    @ContributesAndroidInjector
    abstract fun contributeNetworkActivity(): NetworkActivity
}