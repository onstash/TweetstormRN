package com.tweetstormrn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.tkporter.fabrictwitterkit.FabricTwitterKitPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.twitter.sdk.android.Twitter;
import com.twitter.sdk.android.core.TwitterAuthConfig;
import io.fabric.sdk.android.Fabric;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  // Note: Your consumer key and secret should be obfuscated in your source code before shipping.
  private static final String TWITTER_KEY = "vjghc2HBU5Q1EZsdRKkc6JjHy";
  private static final String TWITTER_SECRET = "6hf3cG5mBtxf4GKYFGmfDsnEagrKY4FuapyWYy9oIwwA5fGr4a";
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            FabricTwitterKitPackage.getInstance(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    TwitterAuthConfig authConfig = new TwitterAuthConfig(TWITTER_KEY, TWITTER_SECRET);
      Fabric.with(this, new Twitter(authConfig));
  }
}
