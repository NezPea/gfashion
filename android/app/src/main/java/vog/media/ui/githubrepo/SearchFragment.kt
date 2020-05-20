package vog.media.ui.githubrepo

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import timber.log.Timber
import vog.media.AppExecutors
import vog.media.di.Injectable
import javax.inject.Inject

/**
 * Yalin on 2020/5/20
 */
class SearchFragment : Fragment(), Injectable {
    @Inject
    lateinit var appExecutors: AppExecutors

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        return super.onCreateView(inflater, container, savedInstanceState)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        Timber.d("appExecutors = %s", appExecutors)
    }
}