package vog.media.ui.cheese

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import vog.media.R
import vog.media.persistence.Cheese

/**
 * Yalin on 2020/5/19
 */

class CheeseViewHolder(parent: ViewGroup) : RecyclerView.ViewHolder(
    LayoutInflater.from(parent.context).inflate(R.layout.cheese_item, parent, false)
) {

    private val nameView = itemView.findViewById<TextView>(R.id.name)
    var cheese: Cheese? = null

    /**
     * Items might be null if they are not paged in yet. PagedListAdapter will re-bind the
     * ViewHolder when Item is loaded.
     */
    fun bindTo(cheese: Cheese?) {
        this.cheese = cheese
        nameView.text = cheese?.name
    }
}