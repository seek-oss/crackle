#!/bin/bash
set -eox pipefail

repo=git@github.com:seek-oss/braid-design-system.git
submodule=fixtures/braid-design-system
branch=v32

# Modified from https://stackoverflow.com/questions/45688121/how-to-do-submodule-sparse-checkout-with-git/45689692#45689692

# Clean submodule dirs so we can start fresh
cd "$(dirname "$0")/.."
[ -d .git/modules/$submodule ] && rm -fr .git/modules/$submodule
[ -d $submodule ] && rm -fr $submodule

# Checkout the to-be submodule
git clone --depth=1 --no-checkout -b $branch $repo $submodule

# Add as a submodule
git submodule add -b $branch --force $repo $submodule

# Move the .git dir from $fixture/.git into parent repo's .git
git submodule absorbgitdirs

# Note there is no "submodule.sub.sparsecheckout" key
git -C $submodule config core.sparseCheckout true

# This pattern determines which files within $repo get checked out.
# Note quoted wildcards to avoid their expansion by shell
echo '/packages/braid-design-system/*' >> .git/modules/$submodule/info/sparse-checkout
echo '/tsconfig.json' >> .git/modules/$submodule/info/sparse-checkout

# Actually do the checkout
git submodule update --force --checkout $submodule
