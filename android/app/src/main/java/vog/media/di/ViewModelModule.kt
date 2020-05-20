package vog.media.di

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider


import dagger.Binds
import dagger.Module
import dagger.multibindings.IntoMap
import vog.media.ui.cheese.CheeseViewModel
import vog.media.ui.image.ImageViewModel
import vog.media.ui.user.UserViewModel
import vog.media.viewmodel.GViewModelFactory

@Suppress("unused")
@Module
abstract class ViewModelModule {
    @Binds
    @IntoMap
    @ViewModelKey(UserViewModel::class)
    abstract fun bindUserViewModel(userViewModel: UserViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(CheeseViewModel::class)
    abstract fun bindCheeseViewModel(cheeseViewModel: CheeseViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(ImageViewModel::class)
    abstract fun bindImageViewModel(imageViewModel: ImageViewModel): ViewModel

    @Binds
    abstract fun bindViewModelFactory(factory: GViewModelFactory): ViewModelProvider.Factory
}
