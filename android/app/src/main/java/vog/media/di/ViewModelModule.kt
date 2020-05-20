/*
 * Copyright (C) 2018 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package vog.media.di

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider


import dagger.Binds
import dagger.Module
import dagger.multibindings.IntoMap
import vog.media.ui.cheese.CheeseViewModel
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
    abstract fun bindViewModelFactory(factory: GViewModelFactory): ViewModelProvider.Factory
}
