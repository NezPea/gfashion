package vog.media.ui

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.databinding.DataBindingUtil
import androidx.paging.PagedListAdapter
import androidx.recyclerview.widget.DiffUtil
import vog.media.R
import vog.media.persistence.Demo

/**
 * Allen on 2020/5/19
 */
class DemoAdapter : PagedListAdapter<Demo, DemoViewHolder>(diffCallback) {
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DemoViewHolder =
        DemoViewHolder(
            DataBindingUtil.inflate(
                LayoutInflater.from(parent.context),
                R.layout.demo_item,
                parent,
                false
            )
        )

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