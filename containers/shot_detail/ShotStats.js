import React, { Component } from 'react'

export default class ShotDetailShotStats extends Component {
  render() {
    return (
      <ul className="shot-stats">
        <li>
          <a className="stats-action like-shot" data-fav-toggle="shot" title="Like this shot" href="/afghlhellp/likes?screenshot_id=2950860-Sun-Scouts-Unite">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png" alt="Icon shotstat like"/>
            <span className="stats-label">Like?</span>
          </a>
          <a className="likes-count stats-num" href="/shots/2950860-Sun-Scouts-Unite/fans">
            209
            <span className="stats-num-label">
              likes
            </span>
          </a>
        </li>
        <li className="shot-stats-share">
          <a href="#" className="stats-action share-shot">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-share-128ae71c26985fc7325ac5362aba434686f12fdfffa45ed874262a19f923b071.png" alt="Icon shotstat share"/>
            <span className="stats-label">Share</span>
          </a>
          <span className="views-count stats-num">
            2,466
            views
          </span>
        </li>
        <li data-bucket-container="true">
          <a className="stats-action bucket-shot" data-bucket-add="true" href="/shots/2950860-Sun-Scouts-Unite/bucketings/new">
            <img src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-bucket-18e67c2d1dc7d2d6ad6f863b1c34e685ed23da9be0cb204f16598ed149e20b9e.png" alt="Icon shotstat bucket"/>
            <span className="stats-label">Bucket</span>
          </a>
          <a className="buckets-count stats-num" href="/shots/2950860-Sun-Scouts-Unite/buckets">
            5
            <span className="stats-num-label">
              buckets
            </span>
          </a>
      </li>
      <li className="shot-stats-colors">
        <a rel="tipsy" className="stats-action" href="/shots/2950860-Sun-Scouts-Unite/colors.aco" original-title="Download this color palette (.aco)"><img width="20" height="20 " src="https://d13yacurqjgara.cloudfront.net/assets/icon-shotstat-drop-0152bfcbd3cb7ed50e73b830df47c754f061a376a662eac8841ad45316598d97.png" alt="Icon shotstat drop"/></a>
          <ul className="color-chips group">
            <li className="color"><span>#FFFFFF</span></li>
            <li className="color"><span>#FFD21F</span></li>
            <li className="color"><span>#F89B23</span></li>
            <li className="color"><span>#686A47</span></li>
            <li className="color"><span>#EE524E</span></li>
            <li className="color"><span>#9F9FB9</span></li>
            <li className="color"><span>#FDE4D1</span></li>
            <li className="color"><span>#F8D39B</span></li>
          </ul>
        </li>
      </ul>
    )
  }
}