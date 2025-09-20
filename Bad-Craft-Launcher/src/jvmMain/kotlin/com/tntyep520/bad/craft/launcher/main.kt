package com.tntyep520.bad.craft.launcher

import androidx.compose.ui.window.Window
import androidx.compose.ui.window.application

fun main() = application {
    Window(
        onCloseRequest = ::exitApplication,
        title = "Bad-Craft-Launcher",
    ) {
        App()
    }
}