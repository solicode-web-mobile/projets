[system.Diagnostics.Process]::Start("chrome","http://127.0.0.1:4000/projets/")
bundle exec jekyll serve --config _config.yml,_config.dev.yml --watch