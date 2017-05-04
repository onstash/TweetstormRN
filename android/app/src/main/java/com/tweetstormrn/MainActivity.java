package com.tweetstormrn;

import android.os.Bundle;
import android.content.res.Resources;

import com.facebook.react.ReactActivity;
import android.content.Intent;
import com.facebook.react.ReactActivity;
import com.tkporter.fabrictwitterkit.FabricTwitterKitPackage;
import com.twitter.sdk.android.Twitter;
import com.twitter.sdk.android.core.TwitterAuthConfig;
import io.fabric.sdk.android.Fabric;
import android.util.Log;
import com.tweetstormrn.R;

public class MainActivity extends ReactActivity {
  // Note: Your consumer key and secret should be obfuscated in your source code before shipping.
    protected String TWITTER_KEY, TWITTER_SECRET;
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "TweetstormRN";
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
      super.onCreate(savedInstanceState);
      TWITTER_KEY = getResources().getString(R.string.twitter_api_key);
      TWITTER_SECRET = getResources().getString(R.string.twitter_api_secret);
      TwitterAuthConfig authConfig = new TwitterAuthConfig(TWITTER_KEY, TWITTER_SECRET);
        Fabric.with(this, new Twitter(authConfig));
    }

    @Override
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        Log.i("STORM", String.valueOf(data));
        FabricTwitterKitPackage.getInstance()
            .onActivityResult(this, requestCode, resultCode, data);
    }
}
