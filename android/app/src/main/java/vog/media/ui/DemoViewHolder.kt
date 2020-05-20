package vog.media.ui

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.RecyclerView
import vog.media.databinding.DemoItemBinding
import vog.media.persistence.Demo

/**
 * Yalin on 2020/5/19
 */
class DemoViewHolder(val binding: DemoItemBinding) : RecyclerView.ViewHolder(binding.root) {
    fun bindTo(demo: Demo?) {
        binding.demo = demo
        binding.callback = object : DemoClickCallback {
            override fun onClick(clazz: Class<out AppCompatActivity>) {
                val intent = Intent(binding.root.context, clazz)
                binding.root.context.startActivity(intent)
            }
        }
    }
}