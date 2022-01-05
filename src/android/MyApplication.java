package com.instabug.cordova.plugin;

import android.content.Context;
import android.graphics.Color;
import androidx.multidex.MultiDex;
import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

import com.instabug.bug.BugReporting;
import com.instabug.library.Feature;
import com.instabug.library.Instabug;
import com.instabug.library.InstabugColorTheme;
import com.instabug.library.invocation.InstabugInvocationEvent;
import com.instabug.library.invocation.util.InstabugFloatingButtonEdge;

import java.util.Timer;
import java.util.TimerTask;

public class MyApplication extends BridgeActivity
{
    public static final String TAG = "MyApplication";

    @Override
    public void onCreate(Bundle savedInstanceState)
    {
        new Instabug.Builder(
                this.getApplication(),
                "YOUR_ANDROID_TOKEN",
                InstabugInvocationEvent.SHAKE
        ).build();
        BugReporting.setFloatingButtonEdge(InstabugFloatingButtonEdge.LEFT);
        BugReporting.setFloatingButtonOffset(250);
        Instabug.setSessionProfilerState(Feature.State.ENABLED);
        Instabug.setColorTheme(InstabugColorTheme.InstabugColorThemeDark);

         // setting primary color after 2 seconds as this gets overwritten by default value otherwise
        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                Instabug.setPrimaryColor(Color.parseColor("#1D82DC"));
            }
        }, 2*1000);

        super.onCreate(savedInstanceState);
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
}
