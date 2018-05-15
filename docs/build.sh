#!/usr/bin/env bash

asciidoctor -r asciidoctor-diagram src/index.adoc -D ./
asciidoctor -r asciidoctor-diagram src/*.adoc -D ./
