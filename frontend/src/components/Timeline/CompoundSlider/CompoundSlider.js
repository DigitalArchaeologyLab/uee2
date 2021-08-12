import React from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";
import "./CompoundSlider.css";

function Handle({ handle: { id, value, percent }, getHandleProps }) {
  return (
    <div
      className="handle"
      style={{
        left: `${percent}%`,
      }}
      {...getHandleProps(id)}
    >
      <div className="handle__value">{value}</div>
    </div>
  );
}

function Track({ source, target, getTrackProps }) {
  return (
    <div
      className="track"
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {
        ...getTrackProps() /* this will set up events if you want it to be clickeable (optional) */
      }
    />
  );
}

function Tick({ tick, count }) {
  return (
    <div>
      <div
        className="ticks"
        style={{
          left: `${tick.percent}%`,
        }}
      />
      <div
        className="ticks__tick"
        style={{
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`,
        }}
      >
        {tick.value}
      </div>
    </div>
  );
}

function CompoundSlider() {
  return (
    <div className="CompoundSlider">
      <Slider
        className="sliderStyle"
        domain={[-100, 100]}
        step={1}
        mode={2}
        values={[10, 40]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div className="railStyle" {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks
          values={[-100, -50, 0, 50, 100] /* generate approximately 15 ticks within the domain */}
        >
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map((tick) => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
}

export default CompoundSlider;
