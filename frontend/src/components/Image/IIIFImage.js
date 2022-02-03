import React, { useEffect, useRef, useMemo } from "react";
import mirador from "mirador";
import "./IIIFImage.css";

function IIIFImage() {
  const imageRef = useRef(null);
  const config = useMemo(
    () => ({
      id: "mirador",
      windows: [
        {
          id: "test",
          loadedManifest:
            "https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001dzmd4/manifest",
        },
      ],
      selectedTheme: "dark",
      window: {
        //global window defaults
        allowClose: false, // Configure if windows can be closed or not
        allowFullscreen: true, // Configure to show a "fullscreen" button in the WindowTopBar
        allowMaximize: false, // Configure if windows can be maximized or not
        allowTopMenuButton: false, // Configure if window view and thumbnail display menu are visible or not
        sideBarOpen: true, // Configure if the sidebar (and its content panel) is open by default
        panels: {
          // Configure which panels are visible in WindowSideBarButtons
          info: true,
          attribution: true,
        },
        views: [{ key: "single", behaviors: ["individuals"] }],
      },
      workspaceControlPanel: {
        enabled: false, // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
      },
      export: {
        catalog: true,
        companionWindows: true,
        config: true,
        elasticLayout: true,
        layers: true,
        // filter out anything re-retrievable:
        manifests: { filter: ([id, value]) => !id.startsWith("http") },
        viewers: true,
        windows: true,
        workspace: true,
      },
    }),
    []
  );

  useEffect(() => {
    const plugins = [];
    imageRef.current = mirador.viewer(config, plugins);
  }, [config]);

  return (
    <div className="iiif">
      <div id={config.id} className="iiif_container" />
    </div>
  );
}

export default IIIFImage;
