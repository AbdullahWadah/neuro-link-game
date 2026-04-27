package com.neuronodes.app

import android.os.Bundle
import com.capacitorjs.plugins.app.AppPlugin
import com.capacitorjs.plugins.haptics.HapticsPlugin
import com.capacitorjs.plugins.splashscreen.SplashScreenPlugin
import com.capacitorjs.plugins.statusbar.StatusBarPlugin
import com.getcapacitor.BridgeActivity
import com.getcapacitor.community.admob.AdMob

class MainActivity : BridgeActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        registerPlugin(AppPlugin::class.java)
        registerPlugin(HapticsPlugin::class.java)
        registerPlugin(SplashScreenPlugin::class.java)
        registerPlugin(StatusBarPlugin::class.java)
        registerPlugin(AdMob::class.java)
        super.onCreate(savedInstanceState)
    }
}
