package vog.media.di

import android.app.Application
import androidx.room.Room
import dagger.Module
import dagger.Provides
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import vog.media.api.GService
import vog.media.persistence.GDatabase
import vog.media.persistence.UserDao
import vog.media.util.LiveDataCallAdapterFactory
import javax.inject.Singleton

@Module(includes = [ViewModelModule::class])
class AppModule {
    @Singleton
    @Provides
    fun provideGService(): GService {
        return Retrofit.Builder()
            .baseUrl("https://api.vog.media/")
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(LiveDataCallAdapterFactory())
            .build()
            .create(GService::class.java)
    }

    @Singleton
    @Provides
    fun provideDb(app: Application): GDatabase {
        return Room
            .databaseBuilder(app, GDatabase::class.java, "github.db")
            .fallbackToDestructiveMigration()
            .build()
    }

    @Singleton
    @Provides
    fun provideUserDao(db: GDatabase): UserDao {
        return db.userDao()
    }
}
