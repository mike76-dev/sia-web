package renterd

import (
	"embed"
	"io/fs"
	"net/http"

	//"go.sia.tech/web/internal/nextjs"
	"github.com/mike76-dev/sia-web/internal/nextjs"
)

//go:embed all:assets/*
var assets embed.FS

// Handler returns an http.Handler that serves the renterd UI.
func Handler() http.Handler {
	assetFS, err := fs.Sub(assets, "assets")
	if err != nil {
		panic(err)
	}
	router, err := nextjs.NewRouter(assetFS.(fs.ReadDirFS))
	if err != nil {
		panic(err)
	}
	return router
}
