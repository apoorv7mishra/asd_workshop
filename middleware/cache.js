const cache = new Map();
const TTL = 60 * 1000; 
function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    const cached = cache.get(key);
    if (!cached) {
        res.setHeader('X-Cache', 'MISS');
        return next();
    }
    const age = Date.now() - cached.createdAt;
    if (age >= TTL) {
        cache.delete(key);
        res.setHeader('X-Cache', 'MISS');
        return next();
    }
    res.setHeader('X-Cache', 'HIT');
    return res.json(cached.data);
}
function setCache(key, data) {
    cache.set(key, {
        data: data,
        createdAt: Date.now()
    });
}
function invalidateCache() {
    cache.clear();
}
module.exports = {
    cacheMiddleware,
    setCache,
    invalidateCache
};