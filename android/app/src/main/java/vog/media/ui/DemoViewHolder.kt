package vog.media.ui

import android.content.Intent
import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import vog.media.R
import vog.media.persistence.Demo

/**
 * Yalin on 2020/5/19
 */
class DemoViewHolder(val parent: ViewGroup) : RecyclerView.ViewHolder(
    LayoutInflater.from(parent.context).inflate(R.layout.cheese_item, parent, false)
) {
    private val nameView = itemView.findViewById<TextView>(R.id.name)

    fun bindTo(demo: Demo?) {
        nameView.text = demo?.name
        nameView.setOnClickListener {
            demo?.apply {
                val intent = Intent(parent.context, clazz)
                parent.context.startActivity(intent)
            }
        }
    }
}