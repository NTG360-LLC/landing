# NTG360 Landing Page - Deployment Scripts

## 🚀 **Quick Deployment Commands**

### **1. Deploy Infrastructure (Prerequisites)**
```bash
# Deploy MetalLB IP Pool
kubectl apply -f infrastructure/metallb-ip-pool.yaml

# Deploy Traefik VIP Service
kubectl apply -f infrastructure/traefik-vip-service.yaml

# Deploy Shared Middlewares
kubectl apply -f infrastructure/traefik-middlewares.yaml

# Deploy Application Services
kubectl apply -f infrastructure/application-services.yaml
```

### **2. Deploy Landing Page to All Environments**
```bash
# Deploy to Development
kubectl apply -f k8s/landing-dev-deployment.yaml
kubectl apply -f k8s/landing-services.yaml

# Deploy to Test
kubectl apply -f k8s/landing-test-deployment.yaml

# Deploy to Staging
kubectl apply -f k8s/landing-staging-deployment.yaml

# Deploy to Production
kubectl apply -f k8s/landing-prod-deployment.yaml
```

### **3. Deploy Ingress Routes**
```bash
# Deploy all IngressRoutes
kubectl apply -f k8s/landing-ingress.yaml
kubectl apply -f infrastructure/ingress-routes.yaml
```

### **4. Verify Deployment**
```bash
# Check all pods
kubectl get pods -n ntg360

# Check services
kubectl get svc -n ntg360

# Check ingress routes
kubectl get ingressroute -n ntg360

# Check certificates
kubectl get certificates -n ntg360
```

## 🌐 **Access URLs**

### **Internal Access (Direct IP)**
- **Development**: http://10.30.0.100:8080
- **Test**: http://10.30.0.101:8080
- **Staging**: http://10.30.0.102:8080
- **Production**: http://10.30.0.103:8080

### **External Access (HTTPS)**
- **Production**: https://app.ntg360.com
- **Development**: https://app-dev.ntg360.com
- **Test**: https://app-test.ntg360.com
- **Staging**: https://app-stg.ntg360.com

## 🔧 **Troubleshooting Commands**

### **Check Pod Logs**
```bash
kubectl logs -n ntg360 -l app=landing-prod
kubectl logs -n ntg360 -l app=landing-dev
```

### **Check Service Status**
```bash
kubectl describe svc -n ntg360 landing-prod-lb
kubectl describe svc -n ntg360 landing-dev-lb
```

### **Check Ingress Status**
```bash
kubectl describe ingressroute -n ntg360 landing-main-https
```

### **Test Connectivity**
```bash
# Test internal connectivity
curl -I http://10.30.0.100:8080
curl -I http://10.30.0.103:8080

# Test external connectivity
curl -I https://app.ntg360.com
curl -I https://app-dev.ntg360.com
```

## 📊 **Monitoring Commands**

### **Check Resource Usage**
```bash
kubectl top pods -n ntg360
kubectl top nodes
```

### **Check Events**
```bash
kubectl get events -n ntg360 --sort-by='.lastTimestamp'
```

## 🚨 **Rollback Commands**

### **Rollback Deployment**
```bash
kubectl rollout undo deployment/landing-prod -n ntg360
kubectl rollout undo deployment/landing-dev -n ntg360
```

### **Scale Down**
```bash
kubectl scale deployment landing-prod --replicas=0 -n ntg360
kubectl scale deployment landing-dev --replicas=0 -n ntg360
```

## 🔐 **Security Verification**

### **Check SSL Certificates**
```bash
kubectl get certificates -n ntg360
kubectl describe certificate app-ntg360-com-tls -n ntg360
```

### **Verify Security Headers**
```bash
curl -I https://app.ntg360.com
```

## 📝 **Environment Variables**

### **Development**
- NODE_ENV: development
- APP_ENV: dev
- API_BASE_URL: https://api-dev.ntg360.com

### **Test**
- NODE_ENV: production
- APP_ENV: test
- API_BASE_URL: https://api-test.ntg360.com

### **Staging**
- NODE_ENV: production
- APP_ENV: staging
- API_BASE_URL: https://api-stg.ntg360.com

### **Production**
- NODE_ENV: production
- APP_ENV: prod
- API_BASE_URL: https://api.ntg360.com
