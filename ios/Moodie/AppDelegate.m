/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"
#import "RCTUtils.h"

#import "RCTBundleURLProvider.h"
#import "RCTRootView.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];


  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"Moodie"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];

  // Get launch image
  NSString *launchImageName = nil;
  if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPhone) {
    CGFloat height = MAX(RCTScreenSize().width, RCTScreenSize().height);
  if (height == 480) launchImageName = @"LaunchImage-700@2x.png"; // iPhone 4/4s
  else if (height == 568) launchImageName = @"LaunchImage-700-568h@2x.png"; // iPhone 5/5s
  else if (height == 667) launchImageName = @"LaunchImage-800-667h@2x.png"; // iPhone 6
  else if (height == 736) launchImageName = @"LaunchImage-800-Portrait-736h@3x.png"; // iPhone 6+
  } else if (UI_USER_INTERFACE_IDIOM() == UIUserInterfaceIdiomPad) {
    CGFloat scale = RCTScreenScale();
  if (scale == 1) launchImageName = @"LaunchImage-700-Portrait~ipad.png"; // iPad
  else if (scale == 2) launchImageName = @"LaunchImage-700-Portrait@2x~ipad.png"; // Retina iPad
  }

  // Create loading view
  UIImage *image = [UIImage imageNamed:launchImageName];
  if (image) {
    UIImageView *imageView = [[UIImageView alloc] initWithFrame:(CGRect){CGPointZero, RCTScreenSize()}];
    imageView.contentMode = UIViewContentModeBottom;
    imageView.image = image;
    rootView.loadingView = imageView;
  }

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

@end
