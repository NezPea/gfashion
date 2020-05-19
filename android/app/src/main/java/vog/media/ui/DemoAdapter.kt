package vog.media.ui

import android.view.ViewGroup
import androidx.paging.PagedListAdapter
import androidx.recyclerview.widget.DiffUtil
import vog.media.persistence.Demo

/**
 * Yalin on 2020/5/19
 */
class DemoAdapter : PagedListAdapter<Demo, DemoViewHolder>(diffCallback) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DemoViewHolder =
        DemoViewHolder(parent)

    override fun onBindViewHolder(holder: DemoViewHolder, position: Int) {
        holder.bindTo(getItem(position))
    }

    companion object {
        private val diffCallback = object : DiffUtil.ItemCallback<Demo>() {
            override fun areItemsTheSame(oldItem: Demo, newItem: Demo): Boolean =
                oldItem.name == newItem.name

            override fun areContentsTheSame(oldItem: Demo, newItem: Demo): Boolean =
                oldItem == newItem
        }
    }
}