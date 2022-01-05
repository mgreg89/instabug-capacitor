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
        Instabug.setPrimaryColor(Color.parseColor("#1D82DC"));
        Instabug.setSessionProfilerState(Feature.State.ENABLED);
        Instabug.setColorTheme(InstabugColorTheme.InstabugColorThemeDark);
        super.onCreate(savedInstanceState);
    }

    @Override
    protected void attachBaseContext(Context base) {
        super.attachBaseContext(base);
        MultiDex.install(this);
    }
}
