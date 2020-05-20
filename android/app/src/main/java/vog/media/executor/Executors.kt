package vog.media.executor

import java.util.concurrent.Executors

/**
 * Allen on 2020/5/19
 */

private val IO_EXECUTOR = Executors.newSingleThreadExecutor()

fun ioThread(f: () -> Unit) {
    IO_EXECUTOR.execute(f)
}